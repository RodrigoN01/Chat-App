import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';

import './App.css';
import LoginForm from './components/LoginForm';

const App = () => {
  if (!localStorage.getItem('username')) return <LoginForm />;

  return (
    <ChatEngine
      height='100vh'
      projectID='4f55bd52-b644-45c3-a84d-f235cf2dc07d'
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
};

export default App;
