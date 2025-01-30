import MySQLdb
from decouple import config

try:
    conn = MySQLdb.connect(
        host=config('DB_HOST'),
        user=config('DB_USER'),
        passwd=config('DB_PASSWORD'),
        db=config('DB_NAME'),
        port=int(config('DB_PORT'))  # 🔹 Convertir a entero
    )
    print("✅ Conexión exitosa a la base de datos")
    conn.close()
except MySQLdb.Error as e:
    print(f"❌ Error al conectar a la base de datos: {e}")
