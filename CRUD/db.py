import mysql.connector

class Database():
    def __init__(self):
        self.db_config = {
                        'host' : 'localhost',
                        'user' : 'root',
                        'password' : '',
                        'database' : 'week4'}
        self.conn = mysql.connector.connect(**self.db_config)
        self.cursor = self.conn.cursor()
    
    def commit(self):
        self.conn.commit()

    def show_db(self):
        select_all = """
            SELECT *
            FROM product
        """
        cursor = self.conn.cursor()
        cursor.execute(select_all)
        rows = cursor.fetchall()
        return rows
    
    def cari(self, id):
        select_item_from_database = """
            SELECT *
            FROM product
            WHERE id=%s
        """
        cursor = self.conn.cursor()
        cursor.execute(select_item_from_database, (id))
        rows = cursor.fetchall()
        return rows

    def new(self, code, name, active):
        add_item_to_database = """
            INSERT INTO product 
            (code, name, active)
            values (%s,%s,%s)
        """
        cursor = self.conn.cursor()
        cursor.execute(add_item_to_database, (code, name, active))
        self.conn.commit()