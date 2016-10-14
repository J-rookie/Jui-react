export default [{
    choice: {
        label: "有取消的选择框",
        value: "none"


    },
    options: [
    {
        label: "选项一",
        value: "1"

    },
    {
        label: "选项二",
        value: "2"

    },
    {
        label: "选项三",
        value: "3"

    },
    {
        label: "选项四",
        value: "4"

    },
    ],


},
{
    choice: {
        label: "有取消的选择框",
        value: "none"

    },
    options: [
    {
        label: "上天",
        value: "1",
        callback: function() {
            alert("你上天了")

        }
    },
    {
        label: "入地",
        value: "2",
        callback: function() {
            alert("你入地了")

        }
    },
    ]

},
{
    choice: {
        label: "无取消的选择框",
        value: "none"

    },
    options: [
    {
        label: "寂寞的选项一",
        value: "1"
    },
    {
        label: "闷骚的选项二",
        value: "2"
    },
    ],
    close: false,

},
{
    choice: {
        label: "自定义样式",
        value: "none"

    },
    options: [
    {
        label: "寂寞的选项一",
        value: "1"
    },
    {
        label: "闷骚的选项二",
        value: "2"
    },
    ],

}]