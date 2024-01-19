## Check Configuration Items {#check-prop}

You can enter the following command to check whether the modified configuration items are taking effect in the container logs:

```bash
docker logs blossom-backend
```

The various parameters you configured will be displayed at the top of the startup log.

<bl-img src="../../imgs/deploy/backend-before-check.png" width="700px"/>

## Check if the Application Has Started Successfully {#check-start}

### Method One: View Logs

You can enter the following command to check if the container has started successfully in the container logs:

```bash
docker logs blossom-backend
```

If the bottom of the log displays the following content, it means the container has started successfully.

<bl-img src="../../imgs/deploy/backend-success.png" width="700px"/>

### Method Two: Direct Access

For example, if you deploy locally, you can access `127.0.0.1:9999`. If it returns the following content, it means the deployment was successful. The message indicates that you are not logged in, and you can now log in to use the client.

```json
{
  "code": "AUTH-40101",
  "msg": "Invalid authorization information",
  "ex": "Invalid authorization information",
  "data": null
}
```
