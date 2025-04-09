# Pokemon Challenge

## Para ejecutar codigo

```bash
# Buildeamos el front

cd pokemon-challenge-frontend/
npm install
npm run build

# Buildeamos el back

cd ../pokemon-challenge-backend/
npm install
npm run build
npx typeorm-ts-node-commonjs migration:run -d db/data-source.ts
npm run start:prod
```

- Ahora en el `http://localhost:3000` se deberia poder ver el frontend de la aplicacion.
- En `http://localhost:3000/api` esta la documentacion de los endpoints hecha con swagger.

## Sobre la base de datos

[![](https://img.plantuml.biz/plantuml/svg/RP112u9048Nl-oi6ZuB_GC84krZfmSunk9DkhQEiMo7MVyzS2OfEy-Pz0-ynKM_Hs6kZ1R5LTW0lpz9ab-qzm1vo60K0-71K4iAm8YQ3bkHgvUnpt_A4tCBOa5DeBPONfoMTYFi5r9sRTkWMHpLOqS5eyHIV1l6wABR9N22U2_pFzw6iKMlYYepZctG1HjrG_tXtnVnrE2Ncy6Y3e1qX5X6nVB_X1G00)](https://editor.plantuml.com/uml/RP112u9048Nl-oi6ZuB_GC84krZfmSunk9DkhQEiMo7MVyzS2OfEy-Pz0-ynKM_Hs6kZ1R5LTW0lpz9ab-qzm1vo60K0-71K4iAm8YQ3bkHgvUnpt_A4tCBOa5DeBPONfoMTYFi5r9sRTkWMHpLOqS5eyHIV1l6wABR9N22U2_pFzw6iKMlYYepZctG1HjrG_tXtnVnrE2Ncy6Y3e1qX5X6nVB_X1G00)

## Sobre la arquitectura

Es un Monolito. El servidor del backend tiene un endpoint para servir el frontend compilado. En cuanto a la db estoy usando sqlite como se indico en la consigna. Todo corre en el mismo nodo.