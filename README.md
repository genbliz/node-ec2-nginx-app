# node-ec2-nginx-app
AWS node EC2 Nginx Application Sample

# STEPS

## Connect to your Linux instance as ec2-user using SSH

## **1. Install Git**
```
sudo yum install -y git
```

## **2. Install NodeJS - Option A**
```
sudo yum install -y gcc-c++ make
curl -sL https://rpm.nodesource.com/setup_18.x | sudo -E bash -
curl -sL https://rpm.nodesource.com/setup_16.x | sudo -E bash -
sudo yum install -y nodejs
```

or

## **2. Install NodeJS - Option B**
```
> curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
> . ~/.nvm/nvm.sh
> nvm install --lts
```
