from flask import Flask, render_template, request
import sqlite3

app = Flask(__name__)

# Function to create the database table if it doesn't exist
def create_table():
    conn = sqlite3.connect('form_submissions.db')
    cursor = conn.cursor()
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS form_submissions (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            email TEXT,
            feedback TEXT
        )
    ''')
    conn.commit()
    conn.close()

# Route to render the index.html template
@app.route('/')
def index():
    return render_template('index.html')

# Route to handle form submissions
@app.route('/submit_feedback', methods=['POST'])
def submit_feedback():
    if request.method == 'POST':
        name = request.form['name']
        email = request.form['email']
        feedback = request.form['feedback']
        
        # Call function to insert form submission into the database
        insert_submission(name, email, feedback)
        
        # Render the index.html template
        return render_template('index.html')
    else:
        return render_template('index.html')


# Function to insert form submission into the database
def insert_submission(name, email, feedback):
    conn = sqlite3.connect('form_submissions.db')
    cursor = conn.cursor()
    cursor.execute('''
        INSERT INTO form_submissions (name, email, feedback)
        VALUES (?, ?, ?)
    ''', (name, email, feedback))
    conn.commit()
    conn.close()

if __name__ == '__main__':
    create_table()
    app.run(debug=True)
