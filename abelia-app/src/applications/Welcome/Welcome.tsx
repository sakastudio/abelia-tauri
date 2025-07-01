import React from 'react';
import type { ApplicationProps } from '../../types/Application';
import './Welcome.css';

export const Welcome: React.FC<ApplicationProps> = () => {
  return (
    <div className="welcome">
      <h2>Welcome to Abelia OS!</h2>
      <p>これは新しいアプリケーションアーキテクチャで構築されたデスクトップ環境です。</p>
      
      <h3>使い方</h3>
      <ul>
        <li>デスクトップのアイコンをダブルクリックしてアプリケーションを開く</li>
        <li>ウィンドウのタイトルバーをドラッグして移動</li>
        <li>右下のコーナーからウィンドウをリサイズ</li>
        <li>タスクバーでウィンドウ間を切り替え</li>
        <li>最小化・最大化ボタンでウィンドウを操作</li>
      </ul>
      
      <h3>新しいアプリケーションの追加方法</h3>
      <ol>
        <li><code>src/applications/</code>に新しいフォルダを作成</li>
        <li>ApplicationPropsを実装したReactコンポーネントを作成</li>
        <li>index.tsでアプリケーションをレジストリに登録</li>
        <li>main.tsxでアプリケーションモジュールをインポート</li>
      </ol>
      
      <p>それだけで、自動的にデスクトップに統合されます！</p>
    </div>
  );
};