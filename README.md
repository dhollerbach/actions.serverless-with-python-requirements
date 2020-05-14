# Serverless with Python Requirements

Javascript action that runs a Serverless deploy using the serverless-python-requirements plugin.

## Inputs

### `args`

**Optional** Additional arguments you want to set.

## Environment Variables

### `aws-access-key-id`

**Conditional** Your aws access key id. Specify along withyour aws secret access key.

### `aws-secret-access-key`

**Conditional** Your aws secret access key.

### `serverless-access-key`

**Conditional** Your serverless access key.

## Example usage

#### AWS Access Keys
```
- name: Set up Node
  uses: actions/setup-node@v1
  with:
    node-version: 12

- name: Set up Python
  uses: actions/setup-python@v2
  with:
    python-version: 3.8  # Update with your python version

- name: Serverless Deploy
  uses: dhollerbach/github-action-serverless-with-python-requirements@master
  with:
    args: '--stage dev'
  env:
    AWS_ACCESS_KEY_ID: ${{ secrets.AWS_ACCESS_KEY_ID }}
    AWS_SECRET_ACCESS_KEY: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
```
#### Serverless Access Key
```
- name: Set up Node
  uses: actions/setup-node@v1
  with:
    node-version: 12

- name: Set up Python
  uses: actions/setup-python@v2
  with:
    python-version: 3.8  # Update with your python version

- name: Serverless Deploy
  uses: dhollerbach/github-action-serverless-with-python-requirements@master
  with:
    args: '--stage dev'
  env:
    SERVERLESS_ACCESS_KEY: ${{ secrets.SERVERLESS_ACCESS_KEY }}
```