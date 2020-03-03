# Serverless with Python Requirements

This actions installs Serverless and runs a deploy using the serverless-python-requirements plugin. You must install the exeq npm package for this plugin to work successfully.

[npm: exeq](https://www.npmjs.com/package/exeq)

## Inputs

### `args`

**Optional** Additional arguments you want to set.

### `aws-access-key-id`

**Required** Your aws access key id.

### `aws-secret-access-key`

**Required** Your aws secret access key.

## Example usage

```
- name: Deploy
  uses: dhollerbach/github-action-serverless-with-python-requirements@master
  with:
    args: '--stage dev'
    aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}
    aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
```
