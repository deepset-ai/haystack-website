const fetch = require("node-fetch");
const crypto = require(`crypto`)

const getXFields = obj => {
    let xfields = {}
  
    // copy x-* extension properties
    for (key in obj) {
      if (key.startsWith('x-')) {
        // convert snake-case to snake_case
        snake_case = key.replace(/-/g, '_')
        xfields[snake_case] = obj[key]
      }
    }
  
    return xfields
  }

const toHash = value => {
    return crypto
      .createHash(`md5`)
      .update(value)
      .digest(`hex`)
  }
  
const toNode = (data, type) => {
    const openApiPrefix = 'openapi.'
  
    if (!data) {
      throw new Error('No data object specified')
    }
  
    if (!type) {
      throw new Error('No type specified')
    }
  
    if (!data.hasOwnProperty('id')) {
      throw new Error('Data object has no id property')
    }
  
    if (!data.hasOwnProperty('parent')) {
      throw new Error('Data object has no parent property')
    }
  
    if (!data.hasOwnProperty('children') || !Array.isArray(data.children)) {
      throw new Error('Data object has no children array property')
    }
  
    if (data.hasOwnProperty('fields') && data.hasOwnProperty('meta')) {
      throw new Error('Data object defines both a fields and a meta property')
    }
  
    if (!data.hasOwnProperty('fields') && !data.hasOwnProperty('meta')) {
      throw new Error('Data object does not define a fields or meta property')
    }
  
    const node = Object.assign(
      {
        id: `${openApiPrefix}${data.id}`,
        parent: data.parent ? `${openApiPrefix}${data.parent}` : null,
        children: data.children.map(c => `${openApiPrefix}${c}`),
        internal: {
          type,
        },
      },
      data.fields,
    )
  
    if (data.meta) {
      node.internal.contentDigest = toHash(data.meta.content)
      node.internal.mediaType = data.meta.mediaType
      node.internal.content = data.meta.content
      return node
    }
  
    node.internal.contentDigest = toHash(JSON.stringify(data.fields))
    return node
  }

const fetchSpec = async url => {
  return fetch(url).then(response => {
    if (response.status === 200) {
      return response.text();
    }

    throw new Error('There was an error retrieving document.')
  })
}

function openApiAggregate(url, nodes = []) {
    fetchSpec(url).then((result) => {
        const json = JSON.parse(result)
        const name = 'openapispec'
        const rootId = `spec.${name}`;
        

        const paths = [];
        const responses = [];
        Object.keys(json.paths).forEach(p => {
            Object.keys(json.paths[p]).forEach(v => {
            const path = json.paths[p][v]
            const pathResponses = Object.keys(path.responses).map(r => {
                const response = path.responses[r]

                let ref = null

                if (response.schema) {
                ref =
                    response.schema.type === 'array'
                    ? response.schema.items.$ref
                    : response.schema.$ref
                }

                const definitionId = ref ? ref.replace('#/definitions/', '') : null

                return {
                id: `${rootId}.path.${p}.verb.${v}.response.${r}`,
                parent: `${rootId}.path.${p}.verb.${v}`,
                children: definitionId
                    ? [`${rootId}.definition.${definitionId}`]
                    : [],
                fields: Object.assign(
                    {
                    statusCode: r,
                    description: response.description,
                    schema: response.schema,
                    headers: response.headers,
                    examples: response.examples,
                    },
                    getXFields(response),
                ),
                }
            })

            pathResponses.forEach(r => {
                responses.push(r)
            })

            paths.push({
                id: `${rootId}.path.${p}.verb.${v}`,
                parent: rootId,
                children: [...pathResponses.map(pr => pr.id)],
                fields: Object.assign(
                {
                    name: p,
                    verb: v,
                    summary: path.summary,
                    description: path.description,
                    parameters: path.parameters,
                    tags: path.tags,
                    tag: path.tags ? path.tags.join(',') : null,
                    operationId: path.operationId,
                    fullPath: p,
                    consumes: path.consumes,
                    produces: path.produces,
                    schemes: path.schemes,
                    deprecated: path.deprecated,
                },
                getXFields(path),
                ),
            })
            })
        })

        const information = {
            id: rootId,
            parent: null,
            children: [...paths.map(p => p.id), undefined],
            fields: {
              name,
              version: json.info.version,
              title: json.info.title,
              description: json.info.description,
              host: json.host,
              schemes: json.schemes,
              basePath: json.basePath,
              produces: json.produces,
            },
        }

        nodes.push(toNode(information, 'OpenApiSpec'));
        paths.forEach(p => {
            nodes.push(toNode(p, 'OpenApiSpecPath'))
        })
        responses.forEach(r => {
            nodes.push(toNode(r, 'OpenApiSpecResponse'))
        })

    });

    return nodes;
}

module.exports = openApiAggregate;