# node-ec2-nginx-app
AWS node EC2 Nginx Application Sample

## Connect to your Linux instance as ec2-user using SSH

## Update packages if needed
```
sudo yum update
```

## STEPS

## **1. Install Git**
```
sudo yum install -y git
```
## **2. Install NodeJS - Option A**
### **Option A**
<small>Check https://github.com/nodesource/distributions for latest compartible distributions</small>

```
sudo yum install -y gcc-c++ make
curl -sL https://rpm.nodesource.com/setup_18.x | sudo -E bash -
sudo yum install -y nodejs
```

### **Option B**
```
> curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
> . ~/.nvm/nvm.sh
> nvm install --lts
```

## **3. Configure systemd - For Auto Restart**

### **Edit systemd**
Edit `systemd.service` file to soothe your application and paste it below:

```
sudo vim /etc/systemd/system/<Your_App_Name>.service
```

### **Enable Service**

```
sudo systemctl enable <Your_App_Name>.service
```

### **Start Service**
```
sudo systemctl start <Your_App_Name>.service
```
**Note**: You can use command: `sudo systemctl restart <Your_App_Name>.service` to restart the service when needed

## **4. Install and Configure Nginx**

### **Install Nginx**
```
 sudo yum install nginx
```

### **Enable Nginx**
```
sudo systemctl enable nginx
```
### **Start Nginx**
```
sudo systemctl start nginx
```
**Note**: You can use command: `sudo systemctl restart nginx` to restart nginx when needed

