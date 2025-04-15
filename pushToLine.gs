function pushFlexToLine(zipUrl) {
  const config = getConfig();
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + config.CHANNEL_ACCESS_TOKEN
  };

  const payload = {
    to: config.USER_ID,
    messages: [
      {
        type: 'flex',
        altText: 'ไฟล์สำเร็จแล้ว ดาวน์โหลดได้ที่นี่',
        contents: {
          type: 'bubble',
          hero: {
            type: 'image',
            url: 'https://i.imgur.com/DoQwB3z.png',
            size: 'full',
            aspectRatio: '20:13',
            aspectMode: 'cover'
          },
          body: {
            type: 'box',
            layout: 'vertical',
            contents: [
              {
                type: 'text',
                text: 'ส่งออกไฟล์เรียบร้อย',
                weight: 'bold',
                size: 'lg'
              },
              {
                type: 'text',
                text: 'คลิกเพื่อดาวน์โหลด ZIP',
                size: 'sm',
                color: '#888888'
              }
            ]
          },
          footer: {
            type: 'box',
            layout: 'vertical',
            spacing: 'sm',
            contents: [
              {
                type: 'button',
                style: 'primary',
                action: {
                  type: 'uri',
                  label: 'ดาวน์โหลด ZIP',
                  uri: zipUrl
                }
              }
            ]
          }
        }
      }
    ]
  };

  const options = {
    method: 'post',
    headers: headers,
    payload: JSON.stringify(payload)
  };

  UrlFetchApp.fetch('https://api.line.me/v2/bot/message/push', options);
}