window.onload = function () {



    const template = [{
        controlType:"input",
        dataField:"tbtusername",
        label: null,
        placeholder: "111",
        cssClass:"underlined",
        append:"<i class=’fas fa-user’></i>"
        }, {
        controlType:"password",
        dataField:"tbtpassword",
        label: null,
        placeholder: "222",
        cssClass:"underlined",
        append:"<i class=’fas fa-key’></i>"
        }, {
        dataField:"systemtheme",
        controlType:"dropdownlist",
        label:"333",
        cssClass:"underlined",
        append:"<i class=’fas fa-palette’></i>",
        controlOptions: {
            filterable: false,
            selectionMode:"one",
            displayMember:"theme",
            valueMember:"theme",
            placeholder: "44444",
            dataSource: [1,2,3,4,5]
            }
        }, {
        controlType:"boolean",
        dataField:"tbtremember",
        label: "55555"
        }, {
        controlType:"group",
        columns: 2,
        controls: [{
        controlType:"button",
        action:"submit",
        label: "6666",
        cssClass:"primary",
        align:"right"
        }, {
        controlType:"button",
        action:"reset",
        label: "77777",
        align:"left"
        }]
        }];
        const form = new Smart.Form("#profileForm", {
        label: "1111111222222333<i class=’fas fa-chart-bar fa-lg’ style=’margin-left:15px;’></i>",
        labelAlign:"left",
        showSummary: false,
        showColonAfterLabel: true,
        controls: template
        });
        form.value = {
       "tbtusername":"",
       "tbtpassword":"",
       "systemtheme": 4,
       "tbtremember": false
        };
          
    const log = document.getElementById('log');
    log.innerHTML = JSON.stringify(form.value);
    form.onValueChanges = function (value) {
        log.innerHTML = JSON.stringify(value);
    };

    const dropdownlist = document.querySelector('.smart-drop-down-list');
    console.log(dropdownlist)
    dropdownlist.addEventListener('change', (event) => {
        console.log(event)
    });
};