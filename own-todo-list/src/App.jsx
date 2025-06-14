import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  const [editId, setEditId] = useState(null);

  const styles = {
    container: {
  maxWidth: '500px',
  width: '100%',
  padding: '30px',
  borderRadius: '15px',
  background: '#fff6f0',
  boxShadow: '0 0 25px rgba(0,0,0,0.08)',
  fontFamily: 'Segoe UI, sans-serif',

  // 🔽 Centering styles:
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
    },
    heading: {
      textAlign: 'center',
      marginBottom: '20px',
      color: '#444',
    },
    inputGroup: {
      display: 'flex',
      gap: '10px',
      marginBottom: '20px',
    },
    input: {
      flex: 1,
      padding: '12px',
      borderRadius: '8px',
      border: '2px solid #ddd',
      fontSize: '16px',
    },
    button: {
      padding: '12px 18px',
      border: 'none',
      borderRadius: '8px',
      backgroundColor: '#ff7f50',
      color: 'white',
      fontWeight: 'bold',
      cursor: 'pointer',
      fontSize: '15px',
    },
    buttonHover: {
      backgroundColor: '#ff5722',
    },
    ul: {
      listStyle: 'none',
      color:'black',
      padding: 0,
    },
    li: {
      backgroundColor: '#fff',
      marginBottom: '10px',
      padding: '12px 16px',
      borderRadius: '10px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      boxShadow: '0 2px 6px rgba(0, 0, 0, 0.05)',
    },
    actions: {
      display: 'flex',
      gap: '8px',
    },
    editBtn: {
      backgroundColor: '#4caf50',
      border: 'none',
      color: 'white',
      padding: '6px 10px',
      borderRadius: '6px',
      cursor: 'pointer',
      fontSize: '14px',
    },
    deleteBtn: {
      backgroundColor: '#f44336',
      border: 'none',
      color: 'white',
      padding: '6px 10px',
      borderRadius: '6px',
      cursor: 'pointer',
      fontSize: '14px',
    },
  };

  const handleSubmit = () => {
    if (!input.trim()) return;

    if (editId !== null) {
      setTodos(todos.map((todo) =>
        todo.id === editId ? { ...todo, text: input } : todo
      ));
      setEditId(null);
    } else {
      setTodos([...todos, { id: Date.now(), text: input }]);
    }

    setInput('');
  };

  const handleEdit = (id) => {
    const editTodo = todos.find((t) => t.id === id);
    setInput(editTodo.text);
    setEditId(id);
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((t) => t.id !== id));
    if (id === editId) {
      setInput('');
      setEditId(null);
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>📝 Todo List</h1>

      <div style={styles.inputGroup}>
        <input
          type="text"
          placeholder="Enter a task..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={styles.input}
        />
        <button
          onClick={handleSubmit}
          style={styles.button}
        >
          {editId !== null ? 'Update' : 'Add'}
        </button>
      </div>

      <ul style={styles.ul}>
        {todos.map((todo) => (
          <li key={todo.id} style={styles.li}>
            <span>{todo.text}</span>
            <div style={styles.actions}>
              <button style={styles.editBtn} onClick={() => handleEdit(todo.id)}>✏️</button>
              <button style={styles.deleteBtn} onClick={() => handleDelete(todo.id)}>🗑️</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
