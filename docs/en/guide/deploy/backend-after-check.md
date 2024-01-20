# Check Configuration Items

The various parameters you configured will be displayed at the top of the startup log.

<bl-img src="../../../imgs/deploy/backend-before-check.png" width="700px"/>

## Check if the Application Has Started Successfully {#check-start}

### Method One: View Logs

If the bottom of the log displays the following content, it means the application has started successfully.

<bl-img src="../../../imgs/deploy/backend-success.png" width="700px"/>

### Method Two: Direct Access

For example, if you deploy locally, you can access `127.0.0.1:9999`. If it returns the following content, it means the deployment was successful.

```json
{
  "code": "AUTH-40101",
  "msg": "Invalid authorization information",
  "ex": "Invalid authorization information",
  "data": null
}
```

This message means you are not logged in, and you can now log in to use the client.

<!-- Or visit `localhost:9999/sys/alive`. If it returns the following content, it means success.

```json
{
  "code": "20000",
  "msg": "Success",
  "data": "This is the [blossom-backend] server [dev] environment"
}
``` -->
