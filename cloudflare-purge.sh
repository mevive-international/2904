#!/bin/bash

curl -X POST "https://api.cloudflare.com/client/v4/zones/b41bace85a7301d28a54fb69b23a2243/purge_cache" \
     -H "X-Auth-Email: seo@meviveinternational.com" \
     -H "X-Auth-Key: 7f21b353d71ad060a78170257798517d806c9" \
     -H "Content-Type: application/json" \
     --data '{"purge_everything":true}' 
