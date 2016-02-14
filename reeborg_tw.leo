<?xml version="1.0" encoding="utf-8"?>
<!-- Created by Leo: http://leoeditor.com/leo_toc.html -->
<?xml-stylesheet ekr_test ?>
<leo_file xmlns:leo="http://leoeditor.com/namespaces/leo-python-editor/1.1" >
<leo_header file_format="2" tnodes="0" max_tnode_index="0" clone_windows="0"/>
<globals body_outline_ratio="0.5" body_secondary_ratio="0.5">
	<global_window_position top="50" left="50" height="500" width="700"/>
	<global_log_window_position top="0" left="0" height="0" width="0"/>
</globals>
<preferences/>
<find_panel_settings/>
<vnodes>
<v t="amd.20160213222901.1"><vh>@settings</vh>
<v t="amd.20160213222901.2"><vh>@data qt-gui-plugin-style-sheet</vh></v>
<v t="amd.20160213222901.3"><vh>@string initial_split_orientation = horizontal</vh></v>
</v>
<v t="amd.20160213223018.1"><vh>@edit index.html</vh></v>
<v t="amd.20160213223914.1"><vh>@edit world.html</vh></v>
<v t="amd.20160213225943.1" a="E"><vh>@path src</vh>
<v t="amd.20160213225953.1" a="E"><vh>@path js</vh>
<v t="amd.20160213230002.1"><vh>@edit zzz_doc_ready.js</vh></v>
<v t="amd.20160213231507.1"><vh>@edit reeborg_dev.js</vh></v>
</v>
</v>
<v t="amd.20160213233731.1"><vh>demo</vh></v>
<v t="amd.20160214141448.1" a="E"><vh>run in localhost</vh>
<v t="amd.20160214141630.1"><vh>how to save file</vh></v>
<v t="amd.20160214141829.1"><vh>Brython tutorial</vh></v>
</v>
</vnodes>
<tnodes>
<t tx="amd.20160213222901.1"></t>
<t tx="amd.20160213222901.2">QTreeWidget {
    /* These apply to the selected item, but not to editing items.*/
    background-color: #ffffec; /* Leo's traditional tree color */
    selection-color: black; /* was white */
    selection-background-color: lightgrey;
    /* font-family: SansSerif; */
    /*font-family: DejaVu Sans Mono;*/
    font-family:YaHei Mono;
    /* 標題字型大小設定 */
    font-size: 20px;
    font-weight: normal; /* normal,bold,100,..,900 */
    font-style: normal; /* normal, italic,oblique */
 }

/* Headline edit widgets */
QTreeWidget QLineEdit {
    background-color: cornsilk;
    selection-color: white;
    selection-background-color: blue;
    /*font-family: DejaVu Sans Mono;*/    
    font-family:YaHei Mono;
    /* 沒有特別對應字型大小 */
    font-size: 20px;
    font-weight: normal; /* normal,bold,100,..,900 */
    font-style: normal; /* normal, italic,oblique */
}

/* The log panes */
QTextEdit {
    background-color: #f2fdff;
    selection-color: red;
    selection-background-color: blue;
    /* font-family: Courier New; */
    font-family:YaHei Mono;
    /* log font 大小 */
    font-size: 20px;
    font-weight: normal; /* normal,bold,100,..,900 */
    font-style: normal; /* normal, italic,oblique */
}

/* The body pane */
QTextEdit#richTextEdit {
    background-color: #fdf5f5; /* A kind of pink. */
    selection-color: white;
    selection-background-color: red;
    /*font-family: DejaVu Sans Mono;*/
    /* font-family: Courier New; */
    font-family:YaHei Mono;
    /* 內文字型大小 */
    font-size: 20px;
    font-weight: normal; /* normal,bold,100,..,900 */
    font-style: normal; /* normal,italic,oblique */
}

QLabel {
    font-family:YaHei Mono;'CherryPy', 'pytz', 'mako', 'beautifulsoup4', 'pymysql', 'peewee'
    /* 下方的 Minibuffer 標題字型大小 */
    font-size: 20px;
    font-weight: normal; /* normal,bold,100,..,900 */
    font-style: normal; /* normal,italic,oblique */
}

/* Editor labels */
QLineEdit#editorLabel {
    background-color: #ffffec;
    font-family:YaHei Mono;
    /* 沒有直接對應字型大小 */
    font-size: 20px;
    font-weight: normal; /* normal,bold,100,..,900 */
    font-style: normal; /* normal,italic,oblique */
    border: 2px;
    margin: 2px;
}</t>
<t tx="amd.20160213222901.3">horizontal: body pane to the left
vertical: body pane on the botton</t>
<t tx="amd.20160213225943.1"></t>
<t tx="amd.20160213225953.1"></t>
<t tx="amd.20160213233731.1">http://coursemdetw.github.io/reeborg_tw/world.html?proglang=python-en&amp;world=%7B%0A%20%20%22robots%22%3A%20%5B%0A%20%20%20%20%7B%0A%20%20%20%20%20%20%22x%22%3A%201%2C%0A%20%20%20%20%20%20%22y%22%3A%201%2C%0A%20%20%20%20%20%20%22_prev_x%22%3A%201%2C%0A%20%20%20%20%20%20%22_prev_y%22%3A%201%2C%0A%20%20%20%20%20%20%22_prev_orientation%22%3A%200%2C%0A%20%20%20%20%20%20%22objects%22%3A%20%7B%7D%2C%0A%20%20%20%20%20%20%22_orientation%22%3A%200%0A%20%20%20%20%7D%0A%20%20%5D%2C%0A%20%20%22walls%22%3A%20%7B%7D%2C%0A%20%20%22description%22%3A%20%22A%20simple%2C%20empty%20world%2C%20ready%20for%20Reeborg%20to%20explore.%5Cn%3Cbr%3E--%3Cbr%3E%3Cem%3EUn%20simple%20monde%20vide%2C%20que%20Reeborg%20peut%20explorer%20%C3%A0%20sa%20guise.%3C%2Fem%3E%22%2C%0A%20%20%22small_tiles%22%3A%20false%2C%0A%20%20%22rows%22%3A%2012%2C%0A%20%20%22cols%22%3A%2014%0A%7D&amp;editor=def%20square(step)%3A%0A%20%20%20%20for%20j%20in%20range(4)%3A%0A%20%20%20%20%20%20%20%20for%20i%20in%20range(step)%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20move()%0A%20%20%20%20%20%20%20%20turn_left()%0A%20%0Afor%20i%20in%20range(1%2C%2011)%3A%20%20%20%20%20%20%20%20%0A%20%20%20%20square(i)&amp;library=%23%20%27from%20library%20import%20*%27%20in%20Python%20Code%20is%20required%20to%20use%0A%23%20the%20code%20in%20this%20library.%20%0A%0A</t>
<t tx="amd.20160214141448.1">Ubuntu:

git clone https://github.com/coursemdetw/reeborg_tw.git

cd reeborg_tw

git checkout gh-pages

python3 -m http.server

use browser to access http://localhost:8000</t>
<t tx="amd.20160214141630.1">use permalink under Additional options to pack programs on Editor into a big URL
</t>
<t tx="amd.20160214141829.1">Since Reeborg use Brython, therefore user can write Brython code to run on the browser</t>
</tnodes>
</leo_file>
