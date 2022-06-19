### REF:

https://www.digitalocean.com/community/tutorials/how-to-create-a-new-sudo-enabled-user-on-ubuntu-20-04-quickstart

https://linuxize.com/post/how-to-add-and-delete-users-on-ubuntu-20-04/

## Step 1 - SSH And Setup Docker
```sh
ssh root@your_server_ip_address
```

### install docker and docker-compose
```sh
##### docker engine
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
```

```sh
##### docker compose
sudo curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
sudo ln -s /usr/local/bin/docker-compose /usr/bin/docker-compose

## test
docker-compose
```
```sh
## test
docker-compose
```
## Step 2 - Adding a New User to the System
```sh
adduser app
```
output
```output
New password:
Retype new password:
passwd: password updated successfully
Changing the user information for app
Enter the new value, or press ENTER for the default
        Full Name []: APP USER
        Room Number []:
        Work Phone []:
        Home Phone []:
        Other []: USER FOR MANAGE VM
Is the information correct? [Y/n] Y
```

## Step 3 - Adding the user to the sudo group
```sh
usermod -aG sudo app

## switch user to 'app' user
su app

## test logout user
exit
```

## Step 4 - Create Keygen for ssh and use with git clone
```sh
ssh-keygen -t ed25519

cat ~/.ssh/id_ed25519.pub >> ~/.ssh/authorized_keys

## test
cat ~/.ssh/id_ed25519.pub
cat ~/.ssh/authorized_keys
```

## Step 5 - Add User 'app' to group of docker
```sh
sudo usermod -aG docker app

## test docker is running
docker ps
```

## DONE 👏

