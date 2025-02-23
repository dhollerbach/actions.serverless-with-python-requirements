# Serverless with Python Requirements

Javascript action that runs a Serverless deploy using the serverless-python-requirements plugin.

## Environment Variables

### `aws-access-key-id`

**Conditional** Your aws access key id.

### `aws-secret-access-key`

**Conditional** Your aws secret access key.

### `serverless-access-key`

**Conditional** Your serverless access key.

## Example usage

#### AWS Credentials
```
- name: Setup Node
  uses: actions/setup-node@v3
  with:
    node-version: 20

- name: Setup Python
  uses: actions/setup-python@v4
  with:
    python-version: 3.8 

- name: Serverless Deploy
  uses: dhollerbach/actions.serverless-with-python-requirements@v2
  env:
    AWS_ACCESS_KEY_ID: ${{ secrets.AWS_ACCESS_KEY_ID }}
    AWS_SECRET_ACCESS_KEY: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
    STAGE: dev
```
#### Serverless Access Key
```
- name: Setup Node
  uses: actions/setup-node@v3
  with:
    node-version: 20

- name: Setup Python
  uses: actions/setup-python@v4
  with:
    python-version: 3.8 

- name: Serverless Deploy
  uses: dhollerbach/actions.serverless-with-python-requirements@v2
  env:
    SERVERLESS_ACCESS_KEY: ${{ secrets.SERVERLESS_ACCESS_KEY }}
    STAGE: dev
```
