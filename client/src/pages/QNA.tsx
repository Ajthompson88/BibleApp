import {useState} from 'react';

function QNA() {
const [question, setQuestion] = useState('');
const [answer, setAnswer] = useState('');
const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setAnswer(`You asked: "${question}". (AI answer would go here.)`);
    setQuestion('');
    };

    return (
        <div className="max-w-xl mx-auto mt-8 p-4">
            <h1 className="text-2xl font-bold mb-4 text-blue-700">AI Bible Q&A</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    placeholder="Ask a question about the Bible..."
                    className="w-full border p-2 rounded"
                />
                <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                    Submit Question
                </button>
            </form>
            {answer && (
                <div className="mt-6 p-4 border rounded bg-gray-50">
                <h2 className="text-lg font-semibold mb-2">AI Response:</h2>
                <p>{answer}</p>
                    </div> 
                )}
            </div>
        );
    }

export default QNA;