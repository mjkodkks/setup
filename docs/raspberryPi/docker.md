---
layout: doc
---

### REF: 
[install docker engine rasberry pi 64-bit use debian](https://docs.docker.com/engine/install/debian/#install-using-the-convenience-script)

[manage-docker-as-a-non-root-user](https://docs.docker.com/engine/install/linux-postinstall/#manage-docker-as-a-non-root-user)

### Check if your Raspberry Pi is 64-bit
```sh
uname -m
```
If the output is `aarch64`, then your Raspberry Pi is 64-bit.
If the output is `armv7l`, then your Raspberry Pi is 32-bit.

If you have a Raspberry Pi 4 or later, it is likely to be 64-bit. If you are using Raspberry Pi OS (formerly Raspbian) 64-bit, you can proceed with the installation of Docker.
### Update your Raspberry Pi
```sh
sudo apt update && sudo apt upgrade -y
```

### Install Docker on Raspberry Pi 64-bit
```sh
 curl -fsSL https://get.docker.com -o get-docker.sh
 sudo sh get-docker.sh
```
after install docker, you can run the following commands to manage docker as a non-root user:
```sh
sudo groupadd docker

sudo usermod -aG docker $USER

newgrp docker
```

try ```docker```


### install Docker on Raspberry Pi 32-bit
```sh
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh --arch armhf
```
after install docker, you can run the following commands to manage docker as a non-root user:
```sh
sudo groupadd docker

sudo usermod -aG docker $USER

newgrp docker
```
try ```docker```