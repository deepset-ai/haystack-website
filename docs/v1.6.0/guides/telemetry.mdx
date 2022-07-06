# Telemetry

Haystack relies on anonymous usage statistics to support continuous software improvements for all its users.
To this end, a limited set of event messages are shared automatically, for example, what kind of `DocumentStore` is used.

## What Information is Shared?

Telemetry in Haystack comprises anonymous usage statistics of base components, such as `DocumentStore`, `Retriever`, `Reader` or any other pipeline node. An event is sent when one of these components is initialized so that we can learn which of them are most relevant to the community. For the same reason, an event is sent when one of the tutorials is executed. The events contain an anonymous user id, which is a randomly generated `uuid`. There is no way to infer your identity from the user id or any other content of the event. 

To prevent revealing a user's identity, the following properties will **never** be used by telemetry:
* IP addresses
* Host names
* File paths
* Queries
* Document contents

You can have a look at the meta data that is shared about your setup by calling `print_telemetry_report()` from `haystack/telemetry.py`. If you would like to inspect all information that telemetry shares when you use Haystack, you can enable writing all events to a log file by calling `enable_writing_events_to_file()`. The default location of that file is `~/.haystack/telemetry.log`.

Here is an exemplary event that is sent when tutorial 1 is executed via running `Tutorial1_Basic_QA_Pipeline.py`.

```
{
    "event": "tutorial 1 executed",
    "distinct_id": "9baab867-3bc8-438c-9974-a192c9d53cd1",
    "properties": {
        "os_family": "Darwin",
        "os_machine": "arm64",
        "os_version": "21.3.0",
        "haystack_version": "1.0.0",
        "python_version": "3.9.6",
        "torch_version": "1.9.0",
        "torch_cuda_version": "0",
        "transformers_version": "4.13.0"
        "execution_env": "script",
        "context": null,
        "n_gpu": 0,
        "n_cpu": 8
    },
}
```

## How Does Telemetry Help?

Telemetry allow us to understand the needs of the community. "What pipeline nodes are most popular?", "Should we focus on supporting one specific DocumentStore?", "How many people use Haystack on Windows?" are exemplary questions that telemetry helps us to answer and thus steer the development process. Further, meta data about the operating system and installed dependency versions help us to quickly identify and address issues caused by specific environment setups. Through sharing this information you enable us to continuously improve Haystack for all its users.

## How Can I Opt-out?

You can disable telemetry by calling `disable_telemetry()` within Python or by setting the environment variable `HAYSTACK_TELEMETRY_ENABLED` to `"False"` directly.

If you are using a bash shell, you can add the following line to the file `~/.bashrc` to permanently disable telemetry: `export HAYSTACK_TELEMETRY_ENABLED=False`. If you are using zsh as your shell, e.g., on MacOS, you need to add that line to the file `~/.zshrc`.

On Windows, if you are using the standard command prompt, you can set a user-level environment variable via running the following command to permanently disable telemetry: `setx HAYSTACK_TELEMETRY_ENABLED "False"`.
If you are using the Windows PowerShell the command is: `[Environment]::SetEnvironmentVariable("HAYSTACK_TELEMETRY_ENABLED","False","User")`.

Note that you might need to restart your shell for the command to take effect.
