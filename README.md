# pipeline-practice (code only)

Small Express app. The application code is given; everything DevOps is yours to write.

- Endpoints: `/` and `/status` (returns `{"status":"OK","version":"v1"}`)
- Listens on port 3000 (see `server.js`)
- Run locally: `npm install`, then `npm start`
- Run the test: `npm test`

## What you write (build each level on the previous one)

0. `Dockerfile`, `.dockerignore`, `.gitignore`, then git init and push to a new GitHub repo
1. `Jenkinsfile`: Checkout, Build, Deploy with Docker (port 3006 on your PC)
2. Add a Test stage (`npm test`) and tag the image with the build number
3. Add a health check (`retry` with `curl`) and a `post { failure }` block
4. `k8s/deployment.yaml` and `k8s/service.yaml`, deploy to minikube from the pipeline
5. Rolling update with `kubectl set image`, `rollout status`, and automatic `rollout undo` on failure
6. Blue-green (Service selector or nginx switch)
