<script language="javascript">
var titletext = "L o v e l i 3 w s ! !";
var index = 0;
var timer;

function scrolltitle() {
    if (index <= titletext.length) {
        document.title = titletext.substring(0, index);
        index++;
        timer = setTimeout(scrolltitle, 200);
    } else {
        index = 0;
        timer = setTimeout(scrolltitle, 1000);
    }
}

window.onload = scrolltitle;
</script>
