# Deploy Welcome to my place

This guide will help you deploy this repository to a production environment.

The stack includes:
- [Traefik](https://traefik.io) to orchestrate domain names and certificates
- [Apache Jena Fuseki](https://jena.apache.org/documentation/fuseki2/) triplestore to store semantic data (on port 3030)
- [Redis](https://redis.io) to cache data and improve performances

## Configuration

In your DNS registrar, you will need to point two domains to your server:

- `data.mydomain.com` with the domain name where your data will be stored
- `mydomain.com` with the domain name where the frontend will be available

In `docker-compose.yml`:

- Replace `data.mydomain.com` with the domain name where your data will be stored
- Replace `mydomain.com` with the domain name where the frontend will be available
- Replace `myemail@mydomain.com` by your email address (this is for Let's encrypt certificates)
- Replace `mypassword` with the password you want for the Fuseki admin

In `middleware/app/.env.local`:

- Replace `data.mydomain.com` with the domain name where your data will be stored
- Replace `mypassword` by the previously set Fuseki password

In `frontend/app/.env.local`:

- Replace `data.mydomain.com` with the domain name where your data will be stored
- Set the other website config (name, language, email...)

> Any file added to the `middleware/app` and `frontend/app` directories will be copied to the Docker containers, eventually overwriting existing files.

## Launch

```bash
docker-compose build
docker-compose up -d
```
