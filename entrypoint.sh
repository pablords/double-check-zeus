#!/bin/bash

set -e

echo "CONTEXTO: $ENVIRONMENT"
echo "DIRETORIO: $APP_PATH"



if [ -z "$APP_PATH" ]; then APP_PATH=./; fi

if [ "$ENVIRONMENT" == "DEVELOPMENT" ]; then
    source $APP_PATH/.env.dev
    echo "CRIANDO ARQUIVO .ENV"
    sed -i 1,1000d .env
    cat .env.dev >> .env
    echo "INSTALANDO DEPENDENCIAS EM $APP_PATH"
    npm install --prefix $APP_PATH
    npm run dev
fi


if [ "$ENVIRONMENT" == "TEST" ]; then
    source $APP_PATH/.env.test
    echo "CRIANDO ARQUIVO .ENV"
    sed -i 1,1000d .env
    cat .env.test >> .env
    echo "INSTALANDO DEPENDENCIAS EM $APP_PATH"
    npm install --prefix $APP_PATH
    echo "INICIADO BUILD DA APLICACAO"
    npm run build
    
fi


if [ "$ENVIRONMENT" == "PRODUCTION" ]; then
    source $APP_PATH/.env.prod
    echo "CRIANDO ARQUIVO .ENV"
    sed -i 1,1000d .env
    cat .env.prod >> .env
    echo "INSTALANDO DEPENDENCIAS EM $APP_PATH"
    npm install --prefix $APP_PATH
    echo "INICIADO BUILD DA APLICACAO"
    npm run build
fi



echo "Executando comando inicial do container"
exec  "$@"
