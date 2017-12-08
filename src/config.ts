export const config = {
  "development": {
    "db_main": {
      "username": "postgres",
      "password": "",
      "database": "flightbot",
      "host": "127.0.0.1",
      "port": 5432,
      "dialect": "postgres"
    },
    "db_claimsapp": {
      "username": "postgres",
      "password": "",
      "database": "compensation",
      "host": "127.0.0.1",
      "port": 5432,
      "dialect": "postgres"
    },
    "jarvis2": {
      "username": "postgres",
      "password": "",
      "database": "jarvis2",
      "host": "127.0.0.1",
      "port": 5432,
      "dialect": "postgres"
    },
    "dialect": "postgres"
  },
  "production": {
    "db_main": {
      "username": "stanford",
      "password": "stanford#123",
      "database": "flightbot",
      "host": "instalocate-db-1.c7xgg6ijxmgb.us-west-2.rds.amazonaws.com",
      "port": 5432,
      "dialect": "postgres"
    },
    "db_claimsapp": {
      "username": "instalocate",
      "password": "instalocate",
      "database": "compensation",
      "host": "compensationapp.c7xgg6ijxmgb.us-west-2.rds.amazonaws.com",
      "port": 5432,
      "dialect": "postgres"
    },
    "jarvis2": {
      "username": "instalocate",
      "password": "instalocate",
      "database": "jarvis",
      "host": "compensationapp.c7xgg6ijxmgb.us-west-2.rds.amazonaws.com",
      "port": 5432,
      "dialect": "postgres"
    }
  }
}

