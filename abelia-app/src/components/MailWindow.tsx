import React, { useState } from 'react';
import './MailWindow.css';

interface Email {
  id: string;
  status: '既読' | '未読';
  sender: string;
  subject: string;
  date: string;
  content?: string;
}

const mockEmails: Email[] = [
  {
    id: '1',
    status: '未読',
    sender: '佐々木俊光',
    subject: '毎日飲んでみるみる元気です。いつもどうもありがとうございます。',
    date: '9:02',
  },
  {
    id: '2',
    status: '未読',
    sender: '畑中　君彦',
    subject: '御繁りに幸甚の至り',
    date: '7:53',
  },
  {
    id: '3',
    status: '未読',
    sender: '山田ひろ子',
    subject: 'ペットの猫に飲ませても大丈夫なのでしょうか',
    date: '6:50',
  },
  {
    id: '4',
    status: '未読',
    sender: '福原海',
    subject: '今日も笑み顔です。おはようございます。',
    date: '4:30',
  },
  {
    id: '5',
    status: '既読',
    sender: 'グロースマーケティン株式会',
    subject: '【ご入金のご案内】プロバイオマーケティンサービス契約更新につきまして',
    date: '3月8日',
  },
  {
    id: '6',
    status: '既読',
    sender: '洲崎　敬子',
    subject: '返金不要です。素晴らしいお水をありがとうございます。',
    date: '3月8日',
  },
  {
    id: '7',
    status: '既読',
    sender: '菊池道宣',
    subject: '初回セット購入希望',
    date: '3月8日',
  },
  {
    id: '8',
    status: '既読',
    sender: '萬子義彦',
    subject: '＜重要＞定例会議までに御準備ください。',
    date: '3月8日',
  },
  {
    id: '9',
    status: '既読',
    sender: '近藤久志',
    subject: 'ノルマ報告（達１５件／７０件）',
    date: '3月8日',
  },
  {
    id: '10',
    status: '未読',
    sender: '洲崎　敬子',
    subject: '【警告】１０日以内に返金対応をお願いします。何度もお電話を差し上げまし',
    date: '3月8日',
  },
  {
    id: '11',
    status: '既読',
    sender: '福原海',
    subject: '今日も笑み顔です。おはようございます。',
    date: '3月8日',
  },
];

export const MailWindow: React.FC = () => {
  const [selectedEmail, setSelectedEmail] = useState<Email | null>(null);
  const [emails, setEmails] = useState<Email[]>(mockEmails);

  const handleEmailClick = (email: Email) => {
    setSelectedEmail(email);
    if (email.status === '未読') {
      setEmails(emails.map(e => 
        e.id === email.id ? { ...e, status: '既読' } : e
      ));
    }
  };

  const handleBack = () => {
    setSelectedEmail(null);
  };

  const getEmailContent = (email: Email): string => {
    const contents: { [key: string]: string } = {
      '7': `前略。
初めまして。
菊池信彦と申します。

営業本部長の弁道様の御講演会を拝聴しまして。
是非こちらのお水の定期購入をしたくご連絡致しました。


当日にいただいたチラシの初回セットの購入をお願いいたします。
セット：ほほえみず"初回セット
割引：初回限定割引`,
    };
    return contents[email.id] || '本文の内容がありません。';
  };

  return (
    <div className="mail-window">
      <div className="mail-toolbar">
        <div className="mail-icon">✉️</div>
        <span className="mail-title">電子メール</span>
      </div>
      
      {!selectedEmail ? (
        <div className="mail-inbox">
          <div className="inbox-header">
            <span>[受信トレイ]　　18 件（未読5 件）</span>
          </div>
          <table className="email-list">
            <thead>
              <tr>
                <th>開読</th>
                <th>差出人</th>
                <th>件名</th>
                <th>受信日</th>
              </tr>
            </thead>
            <tbody>
              {emails.map(email => (
                <tr 
                  key={email.id} 
                  onClick={() => handleEmailClick(email)}
                  className={email.status === '未読' ? 'unread' : 'read'}
                >
                  <td className="status">{email.status}</td>
                  <td className="sender">{email.sender}</td>
                  <td className="subject">{email.subject}</td>
                  <td className="date">{email.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="mail-detail">
          <div className="detail-toolbar">
            <button onClick={handleBack} className="back-button">⬅ 戻る</button>
          </div>
          <div className="detail-header">
            <div>差出人：{selectedEmail.sender} &lt;{selectedEmail.sender.toLowerCase().replace(/\s/g, '')}@example.co.jp&gt;</div>
            <div>件名：{selectedEmail.subject}</div>
            <div>受信日時：{selectedEmail.date}</div>
          </div>
          <div className="detail-content">
            <div className="content-header">
              笑み図　{selectedEmail.subject}
            </div>
            <div className="content-body">
              {getEmailContent(selectedEmail).split('\n').map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};