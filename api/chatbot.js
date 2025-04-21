import axios from 'axios';

const API_URL = 'https://api.openai.com/v1/chat/completions'; // Example endpoint, replace with actual
const API_KEY = 'YOUR_OPENAI_API_KEY'; // Replace with your actual API key

export async function sendMessageToChatbot(messages) {
  try {
    const response = await axios.post(
      API_URL,
      {
        model: 'gpt-4',
        messages: messages.map(msg => ({
          role: msg.sender === 'user' ? 'user' : 'assistant',
          content: msg.text,
        })),
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${API_KEY}`,
        },
      }
    );
    const botMessage = response.data.choices[0].message.content;
    return botMessage;
  } catch (error) {
    console.error('Error sending message to chatbot:', error);
    return "Sorry, I couldn't process your request right now.";
  }
}
