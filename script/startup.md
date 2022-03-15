REF

https://www.digitalocean.com/community/tutorials/how-to-create-a-new-sudo-enabled-user-on-ubuntu-20-04-quickstart

https://linuxize.com/post/how-to-add-and-delete-users-on-ubuntu-20-04/

## Step 1 - SSH
```sh
ssh root@your_server_ip_address
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

## test switch user to 'app' user
su app

## logout user
logout
```

## Step 4 - Create Keygen for ssh and use with git clone
```sh
ssh-keygen -t ed25519

cat ~/.ssh/id_ed25519.pub >> ~/.ssh/authorized_keys

## test
cat ~/.ssh/id_ed25519.pub
cat ~/.ssh/authorized_keys
```

