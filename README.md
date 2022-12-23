# VulnCodeHub
**DISCLAIMER: for research purpose only, illegal use of the platform is not encouraged by us**


## Description

This project was made to gather and host a collection of vulnerable code snippets, with explenations and POC's. So people can easily search for vulnerable snippets to exploit, use or learn.

## Contribution Guidelines

Definitions:
* LANGUAGE: vulnerable snippet original coding language (python, php...)
* VULN_NAME: The CWE name for the vulnerability if available, else just a brief descriptor of the vuln
* PR_REASON: reason of the Pull Request, can be FIX, NEW, or UPDATE

General Steps:

1. Fork this repository
2. Add whichever files/folders are needed for your new code snippets
3. Open a PR using this naming format: **(LANGUAGE): VULN_NAME PR_REASON**

Snippet Creation:

Each vulnerable snippet should be in their corresponding language folder's, all you need is to add a next_id.yaml file. The next_id is the identifier for the file, just check the current highest id in your snippet's language directory and add 1 to it.

i.e. 0001.yaml
```yaml
# VULN NAME
name: PHP RCE

# VULN CWE ID
cwe: 94

# VULN DESCRIPTION
description: The vulnerable code uses the function exec() with a user supplied parameter $_GET["cmd"], and so user's can execute any desired command. 

# VULN CODE SNIPPET
code: |
  <?php
    echo exec($_GET["cmd"]);
  ?>
```

