# nginx
---

- [nginx understanding - devopscurry](https://medium.com/devopscurry/what-is-nginx-understanding-the-basics-of-nginx-in-2021-f8ee0f3d3d54)

### nginx use case
---
- basic load balancer
  - content cache
  - ssl termination
- reverse proxy
- web server
  - serve content from disk
- rate limiting
- basic authentication
- 7 metrics

### Installation
---
```bash
sudo apt install nginx -y
```
### Config
```bash
nginx -V
```
```
nginx version: nginx/1.18.0 (Ubuntu)
built with OpenSSL 1.1.1f  31 Mar 2020
TLS SNI support enabled
configure arguments: --with-cc-opt='-g -O2 -fdebug-prefix-map=/build/nginx-KTLRnK/nginx-1.18.0=. -fstack-protector-strong -Wformat -Werror=format-security -fPIC -Wdate-time -D_FORTIFY_SOURCE=2' --with-ld-opt='-Wl,-Bsymbolic-functions -Wl,-z,relro -Wl,-z,now -fPIC' --prefix=/usr/share/nginx --conf-path=/etc/nginx/nginx.conf --http-log-path=/var/log/nginx/access.log --error-log-path=/var/log/nginx/error.log --lock-path=/var/lock/nginx.lock --pid-path=/run/nginx.pid --modules-path=/usr/lib/nginx/modules --http-client-body-temp-path=/var/lib/nginx/body --http-fastcgi-temp-path=/var/lib/nginx/fastcgi --http-proxy-temp-path=/var/lib/nginx/proxy --http-scgi-temp-path=/var/lib/nginx/scgi --http-uwsgi-temp-path=/var/lib/nginx/uwsgi --with-debug --with-compat --with-pcre-jit --with-http_ssl_module --with-http_stub_status_module --with-http_realip_module --with-http_auth_request_module --with-http_v2_module --with-http_dav_module --with-http_slice_module --with-threads --with-http_addition_module --with-http_gunzip_module --with-http_gzip_static_module --with-http_image_filter_module=dynamic --with-http_sub_module --with-http_xslt_module=dynamic --with-stream=dynamic --with-stream_ssl_module --with-mail=dynamic --with-mail_ssl_module
```
### Testing
---
- for overall testing
```bash
sudo nginx -t
```
```
nginx: the configuration file /etc/nginx/nginx.conf syntax is ok
nginx: configuration file /etc/nginx/nginx.conf test is successful
```
- for specific config file
```
sudo nginx -t -c /etc/nginx/nginx.conf 
```
```
nginx: [emerg] "http" directive is not allowed here in /etc/nginx/conf.d/load-balancer.conf:4
nginx: configuration file /etc/nginx/nginx.conf test failed
```
### Reload
---
To not interrupt user service, use `reload` instead of `restart`.
```bash
sudo service nginx reload
```
### default.conf
---
Additional Actions
```bash
sudo cp -r /usr/share/nginx/html /usr/share/nginx/slide
sudo nano /usr/share/nginx/slide/index.html
```
### Note
---
It is suggested to delete `sites-enabled/default`
- not sure why [?]
```bash
sudo rm /etc/nginx/sites-enabled/default
```
