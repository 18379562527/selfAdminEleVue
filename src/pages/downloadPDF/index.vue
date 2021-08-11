<template>
    <div class="hello">
        <el-button type="primary" @click="download">canvas下载</el-button>
        <el-button type="primary" @click="formDownload">form表单下载</el-button>
    </div>
</template>

<script>
import html2canvas from 'html2canvas';
import jspdf from 'jspdf';
export default {
    name: "downloadPDF",
    data() {
        return {};
    },
    mounted() {
    },
    methods: {
        // html转换成canvas后生成图片导出pdf
        download() {
            var target = document.querySelector("#app"); //policy-information是html的id信息
            console.log(target)
            //target.style.background = "#FFFFFF";
            html2canvas(target, {
                imageTimeout: 0,
                scale: 2,
            }).then((canvas) => {
                var contentWidth = canvas.width;
                var contentHeight = canvas.height;
                //一页pdf显示html页面生成的canvas高度;
                var pageHeight = (contentWidth / 592.28) * 841.89;
                //未生成pdf的html页面高度
                var leftHeight = contentHeight;
                //页面偏移
                var position = 0;
                //a4纸的尺寸[595.28,841.89]，html页面生成的canvas在pdf中图片的宽高
                var imgWidth = 595.28;
                var imgHeight = (592.28 / contentWidth) * contentHeight;
                var pageData = canvas.toDataURL("image/jpeg", 1.0);
                var pdf = new jspdf("", "pt", "a4");

                //有两个高度需区分，一个是html页面的实际高度，和生成pdf的页面高度(841.89)
                //当内容未超过pdf一页显示的范围，无需分页
                if (leftHeight < pageHeight){
                    pdf.addImage(pageData, "JPEG", 0, 0, imgWidth, imgHeight);
                } else{
                    while (leftHeight > 0) {
                        pdf.addImage(pageData, "JPEG", 0, position, imgWidth, imgHeight);
                        leftHeight -= pageHeight;
                        position -= 841.89;
                        //避免添加空白页
                        if (leftHeight > 0) {
                        pdf.addPage();
                        }
                    }
                }
                var name = "html转换成canvas后生成图片导出pdf.pdf"; // 定义生成的pdf的文件名字
                pdf.save(name);
            });
        },
        formDownload() {
            let dom = document.querySelector("#downLoadForm");
            dom.submit();
        },
    },
    };
</script>

<!-- Add "scoped" -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
