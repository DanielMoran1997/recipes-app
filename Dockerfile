from nginx: alpine

run rm -rf /usr/share/nginx/html

copy /dist/web-programming-project/usr/share/nginx/html

expose 80 443

cmd ["nginx", "-g", "daemon off;"]