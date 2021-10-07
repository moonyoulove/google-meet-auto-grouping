(async () => {
    /* [
        ["第一組組員一", ["第一組組員二","第一組組員別名"]],
        ["第二組組員一"],
        ["第三組組員一"]
    ]
    [[],["齡慶"],[]] */
    const groupList = JSON.parse(prompt("輸入組員名單(JSON格式)", "[]"));
    const numField = document.querySelector("[aria-label='聊天室數量'");
    const needsWait = numField.value < groupList.length;
    numField.value = groupList.length;
    numField.dispatchEvent(new FocusEvent("blur"));
    const groupTab = document.querySelector("[data-sub-panel-id='4']");
    await waitForMutation(needsWait, groupTab, { childList: true, subtree: true });
    const clearBtn = document.querySelector("[aria-label='清除']");
    clearBtn.click();
    await waitForMutation(!clearBtn.disabled, clearBtn, { attributes: true, attributeFilter: ["disabled"] });
    // await waitForMutation(!clearBtn.disabled, groupTab, { childList: true, subtree: true}, checkClear);
    const groupBlocks = document.querySelectorAll("[aria-label='會議室名稱']");
    for (let i = 0; i < groupList.length; i++) {
        const memberNames = groupList[i];
        const groupBlock = groupBlocks[i];
        groupBlock.textContent = `第${i + 1}組`;
        groupBlock.dispatchEvent(new FocusEvent("blur"));
        for (let memberName of memberNames) {
            const aliaNames = Array.isArray(memberName) ? memberName : [memberName];
            for (let name of aliaNames) {
                if(name) {
                    const memberBlocks = document.querySelectorAll(`[draggable='true'][aria-label*='${name}']`);
                    for (let memberBlock of memberBlocks) {
                        const dataTransfer = new DataTransfer();
                        memberBlock.dispatchEvent(new DragEvent("dragstart", { dataTransfer, bubbles: true }));
                        groupBlock.dispatchEvent(new DragEvent("drop", { dataTransfer, bubbles: true }));
                    }
                }
            }
        }
    }
})();

function waitForMutation(needsWait, target, options, condition) {
    return new Promise(resolve => {
        if (needsWait) {
            (new MutationObserver((records, observer) => {
                if(!condition || condition()) {
                    observer.disconnect();
                    resolve();
                }
                
            })).observe(target, options);
        } else {
            resolve();
        }
    });
}

function wait(time) {
    return new Promise(resolve => {
        setTimeout(resolve, time);
    });
}

function checkClear() {
    const memberNums = document.querySelectorAll("[aria-label$='位參與者']");
    return Array.prototype.every.call(memberNums, memberNum => memberNum.ariaLabel === "0 位參與者")
}
