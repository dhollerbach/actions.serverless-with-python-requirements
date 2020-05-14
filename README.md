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
- name: Deploy
  uses: dhollerbach/github-action-serverless-with-python-requirements@master
  with:
    args: '--stage dev'
    aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}
    aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
```
#### Serverless Access Key
```
- name: Deploy
  uses: dhollerbach/github-action-serverless-with-python-requirements@master
  with:
    args: '--stage dev'
    serverless-access-key: ${{ secrets.SERVERLESS_ACCESS_KEY }}
```