(async () => {
    /* [
        ["第一組組員一", ["第一組組員二","第一組組員別名"]],
        ["第二組組員一"],
        ["第三組組員一"]
    ] */
    const groupList = JSON.parse(prompt("輸入組員名單(JSON格式)", "[]"));
    const clearBtn = document.querySelector("[aria-label='清除']");
    clearBtn.click();
    await waitForMutation(!clearBtn.disabled, clearBtn, { attributes: true, attributeFilter: ["disabled"] });
    const numField = document.querySelector("[aria-label='聊天室數量'");
    const needsWait = numField.value < groupList.length;
    numField.value = groupList.length;
    numField.dispatchEvent(new FocusEvent("blur"));
    const groupTab = document.querySelector("[data-sub-panel-id='4']");
    await waitForMutation(needsWait, groupTab, { childList: true, subtree: true });
    const groupBlocks = document.querySelectorAll("[aria-label='會議室名稱']");
    groupList.forEach((memberNames, index) => {
        const groupBlock = groupBlocks[index];
        groupBlock.textContent = `第${index + 1}組`;
        groupBlock.dispatchEvent(new FocusEvent("blur"));
        memberNames.forEach(memberName => {
            const aliaNames = Array.isArray(memberName) ? memberName : [memberName];
            for (let name of aliaNames) {
                const memberBlock = document.querySelector(`[draggable='true'][aria-label='${name}']`);
                if (memberBlock) {
                    const dataTransfer = new DataTransfer();
                    memberBlock.dispatchEvent(new DragEvent("dragstart", { dataTransfer, bubbles: true }));
                    groupBlock.dispatchEvent(new DragEvent("drop", { dataTransfer, bubbles: true }));
                    break;
                }
            }
        });
    });
})();

function waitForMutation(needsWait, target, options) {
    return new Promise(resolve => {
        if (needsWait) {
            (new MutationObserver((records, observer) => {
                observer.disconnect();
                resolve();
            })).observe(target, options);
        } else {
            resolve();
        }
    });
}
