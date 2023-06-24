# Node-docker

```
docker build -t <image_name>:<version> <build_path>
```

```
docker build -t myapp:0.0.1 .
```


```
docker container run -d --name myapp -p 8000:8099 myapp:0.0.1
```

8000 = local machine port
8099 = docker(node) machine port

Reference:
https://docs.docker.com/engine/reference/commandline/build/