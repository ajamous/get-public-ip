🌐 Get-public-ip utility 


This is an interactive command-line program that queries your public IP address  💻

It allows a user to enter a command to either get their public IP address or quit the program.

The readline module is used to create a readline interface, which is an input/output interface provided by Node.js that allows a user to enter input through the command line and receive output through the command line.

The request module is used to make HTTP requests. In this case, the code makes an HTTP request to the 'https://api.ipify.org' service, which returns the public IP address of the device making the request.




📥 **Installation**



```shell
git clone https://github.com/ajamous/get-public-ip.git
cd get-public-ip
npm install
```

🚀 **Usage:**




```shell
node app.js
  
Enter a command (ip to get your public ip-address, q to quit): ip
  > Your public IP address is: 176.29.1.1
  
```






