# How to

### Install dependencies:
```
npm install && tsd install
```

### Build:
```
npm run build
```

### Run on develop environment:
```
npm run dev
```

### Start:
```
npm start
```

### Test:
```
npm test
```


# Docker

### Build docker image:
```
docker build -t {name} .
```

### Run:
```
docker run --env NODE_ENV={environment} -p {public port}:8000 {name}
```
