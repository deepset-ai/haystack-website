import os
from pprint import pprint

patterns = [
    "/components/",
    "/overview/",
    "/guides/",
    "/reference/",
    "/tutorials/",
    "/pipeline_nodes/",
    "/usage/"
]

all_links = []
all_new_links = []


def get_mdx_filenames(directory):
    files = list(os.walk(directory))
    all_mdx_files = []
    for curr_dir, sub_dir, filenames in files:
        for f in filenames:
            if f[-4:] == ".mdx":
                all_mdx_files.append(curr_dir + "/" + f)
    return all_mdx_files


def replace_links(all_mdx_files, patterns, new_version):
    for mdx_file in all_mdx_files:
        replace_links_single(mdx_file, patterns, new_version)


def replace_links_single(mdx_file, patterns, new_version):
    lines = [l for l in open(mdx_file)]
    new_lines = []
    for l in lines:
        if all(x not in l for x in patterns):
            new_lines.append(l)
        else:
            new_line = l
            for p in patterns:
                new_pattern = p + new_version + "/"
                if p in new_line:
                    new_line = new_line.replace(p, new_pattern)

            all_links.append(l)
            all_new_links.append(new_line)
            new_lines.append(new_line)
    with open(mdx_file, "w") as f:
        f.write("".join(new_lines))


if __name__ == "__main__":

    from argparse import ArgumentParser

    parser = ArgumentParser()
    parser.add_argument(
        "-d", "--dir",
        dest="directory",
        help="The .mdx files within this directory will have their links updated",
    )
    parser.add_argument(
        "--new_version", "-v",
        dest="new_version",
        help="The version tag that should be inserted into the links."
    )

    args = parser.parse_args()

    all_mdx_files = get_mdx_filenames(args.directory)
    replace_links(all_mdx_files, patterns, args.new_version)

    replacements = list(zip(all_links, all_new_links))

    for old, new in replacements:
        print("Old:")
        print("\t" + old)
        print("New:")
        print("\t" + new)
        print()
    pprint(replacements)
