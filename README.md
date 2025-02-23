# Serverless with Python Requirements  

JavaScript GitHub Action that runs a Serverless deploy using the `serverless-python-requirements` plugin.  

## Inputs  

| Name                               | Required     | Description  |
|------------------------------------|-------------|--------------|
| `aws-access-key-id`                | **Conditional** | AWS Access Key ID. Required if using AWS credentials instead of Serverless Access Key. |
| `aws-secret-access-key`            | **Conditional** | AWS Secret Access Key. Required if using AWS credentials instead of Serverless Access Key. |
| `enable-canary-deployments-plugin` | **Optional** | Whether to install `serverless-plugin-canary-deployments`. |
| `enable-domain-manager-plugin`     | **Optional** | Whether to install `serverless-domain-manager`. |
| `serverless-access-key`            | **Conditional** | Serverless Access Key. Required if not using AWS credentials. |

## Example Usage  

### Using AWS Credentials  
```yaml
- name: Setup Node.js
  uses: actions/setup-node@v3
  with:
    node-version: 20

- name: Setup Python
  uses: actions/setup-python@v4
  with:
    python-version: 3.9

- name: Serverless Deploy
  uses: dhollerbach/actions.serverless-with-python-requirements@v3
  with:
    aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}
    aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
```

### Using Serverless Access Key
```yaml
- name: Setup Node.js
  uses: actions/setup-node@v3
  with:
    node-version: 20

- name: Setup Python
  uses: actions/setup-python@v4
  with:
    python-version: 3.9

- name: Serverless Deploy
  uses: dhollerbach/actions.serverless-with-python-requirements@v3
  with:
    serverless-access-key: ${{ secrets.SERVERLESS_ACCESS_KEY }}
```

### Using Serverless config in a different path
```yaml
- name: Setup Node.js
  uses: actions/setup-node@v3
  with:
    node-version: 20

- name: Setup Python
  uses: actions/setup-python@v4
  with:
    python-version: 3.9

- name: Serverless Deploy
  uses: dhollerbach/actions.serverless-with-python-requirements@v3
  with:
    serverless-access-key: ${{ secrets.SERVERLESS_ACCESS_KEY }}
```
