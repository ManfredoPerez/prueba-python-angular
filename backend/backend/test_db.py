import MySQLdb
from decouple import config

try:
    db_port_str = config('DB_PORT')
    db_port = int(db_port_str)  # Convertir puerto a número entero

    conn = MySQLdb.connect(
        host=config('DB_HOST'),
        user=config('DB_USER'),
        passwd=config('DB_PASSWORD'),
        db=config('DB_NAME'),
        port=db_port
    )
    print("Conexión exitosa a la base de datos")
    conn.close()
except MySQLdb.Error as e:
    print(f"Error al conectar a la base de datos: {e}")
except ValueError:  
    print("Error: DB_PORT debe ser un número entero.")
except Exception as e: 
    print(f"Se produjo un error inesperado: {e}")
