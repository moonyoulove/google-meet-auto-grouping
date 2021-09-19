# Google Meet 自動分組

[Google Meet 自動分組](https://none)

將連結加入書籤或拖曳至書籤列，並且將網址改成下面的文字：

	javascript:void%20function(){function%20a(a,b,c){return%20new%20Promise(d=%3E{a%3Fnew%20MutationObserver((a,b)=%3E{b.disconnect(),d()}).observe(b,c):d()})}(async()=%3E{const%20b=JSON.parse(prompt(%22\u8F38\u5165\u7D44\u54E1\u540D\u55AE(JSON\u683C\u5F0F)%22,%22[]%22)),c=document.querySelector(%22[aria-label='\u6E05\u9664']%22);c.click(),await%20a(!c.disabled,c,{attributes:!0,attributeFilter:[%22disabled%22]});const%20d=document.querySelector(%22[aria-label='\u804A\u5929\u5BA4\u6578\u91CF'%22),e=d.value%3Cb.length;d.value=b.length,d.dispatchEvent(new%20FocusEvent(%22blur%22));const%20f=document.querySelector(%22[data-sub-panel-id='4']%22);await%20a(e,f,{childList:!0,subtree:!0});const%20g=document.querySelectorAll(%22[aria-label='\u6703\u8B70\u5BA4\u540D\u7A31']%22);b.forEach((a,b)=%3E{const%20c=g[b];c.textContent=`第${b+1}組`,c.dispatchEvent(new%20FocusEvent(%22blur%22)),a.forEach(a=%3E{const%20b=Array.isArray(a)%3Fa:[a];for(let%20d%20of%20b){const%20a=document.querySelector(`[draggable='true'][aria-label='${d}']`);if(a){const%20b=new%20DataTransfer;a.dispatchEvent(new%20DragEvent(%22dragstart%22,{dataTransfer:b,bubbles:!0})),c.dispatchEvent(new%20DragEvent(%22drop%22,{dataTransfer:b,bubbles:!0}));break}}})})})()}();

1.先點擊設定分組討論室進入編輯模式
---

![設定分組討論室](https://i.imgur.com/Yc4MYPP.png)

2.在這個狀態下打開剛剛保存的書籤
---

![編輯模式](https://i.imgur.com/dRq7M29.png)
![打開書籤](https://i.imgur.com/3YHJxBO.png)

3.出現一個輸入框，將分組名單匯入，格式為JSON，範例如下：
---

    [
      ["第一組組員一", ["第一組組員二","第一組組員二別名"]],
      ["第二組組員一"],
      ["第三組組員一"]
    ]

![enter image description here](https://i.imgur.com/XXZ6MvQ.png)

4.分組完成後，點擊保存
---

![分組結果](https://i.imgur.com/lZQ7cNY.png)
