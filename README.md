# Google Meet 自動分組

[Google Meet 自動分組](https://none)

將連結加入書籤或拖曳至書籤列，並且將網址改成下面的文字：

	javascript:(function()%7Bfunction%20waitForMutation(t%2Ce%2Ca%2Cr)%7Breturn%20new%20Promise(n%3D%3E%7Bt%3Fnew%20MutationObserver((t%2Ce)%3D%3E%7Br%26%26!r()%7C%7C(e.disconnect()%2Cn())%7D).observe(e%2Ca)%3An()%7D)%7D(async()%3D%3E%7Bconst%20t%3DJSON.parse(prompt(%22%E8%BC%B8%E5%85%A5%E7%B5%84%E5%93%A1%E5%90%8D%E5%96%AE(JSON%E6%A0%BC%E5%BC%8F)%22%2C%22%5B%5D%22))%2Ce%3Ddocument.querySelector(%22%5Baria-label%3D'%E8%81%8A%E5%A4%A9%E5%AE%A4%E6%95%B8%E9%87%8F'%22)%2Ca%3De.value%3Ct.length%3Be.value%3Dt.length%2Ce.dispatchEvent(new%20FocusEvent(%22blur%22))%3Bconst%20r%3Ddocument.querySelector(%22%5Bdata-sub-panel-id%3D'4'%5D%22)%3Bawait%20waitForMutation(a%2Cr%2C%7BchildList%3A!0%2Csubtree%3A!0%7D)%3Bconst%20n%3Ddocument.querySelector(%22%5Baria-label%3D'%E6%B8%85%E9%99%A4'%5D%22)%3Bn.click()%2Cawait%20waitForMutation(!n.disabled%2Cn%2C%7Battributes%3A!0%2CattributeFilter%3A%5B%22disabled%22%5D%7D)%3Bconst%20o%3Ddocument.querySelectorAll(%22%5Baria-label%3D'%E6%9C%83%E8%AD%B0%E5%AE%A4%E5%90%8D%E7%A8%B1'%5D%22)%3Bfor(let%20e%3D0%3Be%3Ct.length%3Be%2B%2B)%7Bconst%20a%3Dt%5Be%5D%2Cr%3Do%5Be%5D%3Br.textContent%3D%60%E7%AC%AC%24%7Be%2B1%7D%E7%B5%84%60%2Cr.dispatchEvent(new%20FocusEvent(%22blur%22))%3Bfor(let%20t%20of%20a)%7Bconst%20e%3DArray.isArray(t)%3Ft%3A%5Bt%5D%3Bfor(let%20t%20of%20e)if(t)%7Bconst%20e%3Ddocument.querySelectorAll(%60%5Bdraggable%3D'true'%5D%5Baria-label*%3D'%24%7Bt%7D'%5D%60)%3Bfor(let%20t%20of%20e)%7Bconst%20e%3Dnew%20DataTransfer%3Bt.dispatchEvent(new%20DragEvent(%22dragstart%22%2C%7BdataTransfer%3Ae%2Cbubbles%3A!0%7D))%2Cr.dispatchEvent(new%20DragEvent(%22drop%22%2C%7BdataTransfer%3Ae%2Cbubbles%3A!0%7D))%7D%7D%7D%7D%7D)()%3B%7D)()%3B

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
