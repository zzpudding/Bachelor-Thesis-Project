<?php
/**
 * Created by PhpStorm.
 * User: zhangyujia
 * Date: 2414.06.18
 * Time: 12:53
 */
$user = "root";
$password = "root";
$db = "book";
$host = "localhost";
//set up connection to database
$connection = new MySQLi($host, $user, $password, $db);

if ($connection->connect_error) {
    die("Connection failed: " . $connection->connect_error);
} else echo "";


//query for the advanced search options
$query_BatchName = "SELECT * FROM  WHERE category= ";
$query_BatchParameter = "";
$query_Show = "";
$query_TransportName = "";
$query_TransParameter = "";

//corresponding result for advanced search selection option
$result_BN = $connection->query($query_BatchName);
$result_BP = $connection->query($query_BatchParameter);
$result_S = $connection->query($query_Show);
$result_TN = $connection->query($query_TransportName);
$result_TP = $connection->query($query_TransParameter);

//corresponding row name in database, this part should be modified according to actual database
//for example, $batchName = "(actual Category Name in DB)"
$batchName = "batchName";
$batchParameter = "";
$show = "";
$transportName = "";
$transportParameter = "";

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">
    <title>Food Traceability</title>
    <!-- Bootstrap core CSS-->
    <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
    <!-- Custom fonts for this template-->
    <link href="vendor/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">
    <!-- Page level plugin CSS-->
    <link href="vendor/datatables/dataTables.bootstrap4.css" rel="stylesheet">
    <!-- Custom styles for this template-->
    <link href="css/sb-admin.css" rel="stylesheet">
    <!--load vis.js reference-->
    <script src="vis/dist/vis.js"></script>
    <link href="vis/dist/vis.css" rel="stylesheet" type="text/css"/>
    <!-- Logo in website tab/bookmark -->
    <link rel='stylesheet prefetch' href='https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css'>
    <link rel="bookmark" type="image/x-icon" href="images/favicon.ico"/>
    <link rel="shortcut icon" href="images/favicon.ico">
    <link rel="icon" href="images/favicon.ico">
    <!-- selection Box reference -->
    <!-- import Vue.js -->
    <script src="https://cdn.jsdelivr.net/npm/vue@2.5.16/dist/vue.js"></script>
    <script src="//vuejs.org/js/vue.min.js"></script>
    <!-- import stylesheet -->
    <link href="css/popUpWindow.css" rel="stylesheet">
    <link href="css/selectionBox.css" rel="stylesheet">
    <link href="css/advancedSearch.css" rel="stylesheet">
    <link rel="stylesheet" href="//unpkg.com/iview/dist/styles/iview.css">
    <script src="//unpkg.com/vue/dist/vue.js"></script>
    <script src="js/iview_dist_iview.js"></script>


</head>

<body class="fixed-nav sticky-footer bg-dark" id="page-top">
<!-- Navigation-->
<nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
    <a class="navbar-brand" href="index.php">Prototype</a>
    <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
            data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
            aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav navbar-sidenav" id="exampleAccordion">
            <li class="nav-item" data-toggle="tooltip" data-placement="right" title="Dashboard">
                <a class="nav-link" href="index.php">
                    <i class="fa fa-fw fa-dashboard"></i>
                    <span class="nav-link-text">Dashboard</span>
                </a>
            </li>
            <li class="nav-item" data-toggle="tooltip" data-placement="right" title="Tables">
                <a class="nav-link" href="tables.html">
                    <i class="fa fa-fw fa-table"></i>
                    <span class="nav-link-text">Tables</span>
                </a>
            </li>
            <li class="nav-item" data-toggle="tooltip" data-placement="right" title="Link">
                <a class="nav-link" href="#">
                    <i class="fa fa-fw fa-link"></i>
                    <span class="nav-link-text">Link</span>
                </a>
            </li>
        </ul>
        <ul class="navbar-nav sidenav-toggler">
            <li class="nav-item">
                <a class="nav-link text-center" id="sidenavToggler">
                    <i class="fa fa-fw fa-angle-left"></i>
                </a>
            </li>
        </ul>
        <ul class="navbar-nav ml-auto">
            <li class="nav-item">
                <a class="nav-link" data-toggle="modal" data-target="#exampleModal">
                    <i class="fa fa-fw fa-sign-out"></i>Logout</a>
            </li>
        </ul>
    </div>
</nav>
<div class="content-wrapper">
    <div class="container-fluid">
        <!-- Breadcrumbs-->
        <ol class="breadcrumb">
            <li class="breadcrumb-item">
                <a href="#">Dashboard</a>
            </li>
            <li class="breadcrumb-item active">My Dashboard</li>
        </ol>
    </div>
    <!-- Selection Box-->
    <div class="card mb-3">
        <div class="card-header">
            <i class="fa fa-search"></i> Selection Box
        </div>
        <div class="card-body" style="display: inline-block">
            <form action="index.php" method="post">
                <div id="datepicker">
                    <Date-picker type="datetimerange"
                                 @on-change="hanldeChange" placeholder="select time"
                                 style="width: 300px"></Date-picker>
                </div>
                <div class="batchArea">
                    <label class="batchPicker">Batch start in time range
                        <input type="checkbox" checked="checked" id="startBatch">
                        <span class="checkmark"></span>
                    </label>
                    <label class="batchPicker">Batch end in time range
                        <input type="checkbox" id="endBatch">
                        <span class="checkmark"></span>
                    </label>
                </div>
                <div class="searchButtonArea">
                    <button type="submit" class="searchBtn" id="searchBtn1" onclick="search()"><span>Search</span>
                    </button>
                    <button type="button" class="searchBtn" id="searchBtn2" onclick="quickSearch()">
                        <span>Default Search</span>
                    </button>
                </div>
                <div class="searchButtonArea">

                </div>


                <div style="display: inline-block">
                    <div class="panel-group" id="accordion">
                            <div class="panel-heading">
                                    <a data-toggle="collapse" data-parent="#accordion"
                                       href="#collapseOne">
                                        <button type="button" class="searchBtn AdSearchBtn" id="advancedSearch"
                                                onclick="advancedSearch()"><span>Advanced Search Options</span></button>
                                    </a>
                            </div>
                            <div class="advancedSearchArea">
                                <div id="collapseOne" class="panel-collapse collapse in">
                                        <div class="advancedSelection">
                                            <!--ALL default option under advancedSelection div class should be replaced by commended php code-->
                                            <select class="custom-select-lg" id="batchNameSelect">
                                                <option>batch</option>
                                                <option>name</option>
                                                <?php //while ($row = $result_BN->fetch_assoc()) {
                                                //echo "<option>" . $row{$batchName} . "</option>";
                                                //}
                                                //?>
                                            </select>
                                            <select>
                                                <option>batch</option>
                                                <option>parameter</option>
                                                <?php //while ($row = $result_BP->fetch_assoc()) {
                                                //                                                    echo "<option>" . $row{$batchParameter} . "</option>";
                                                //                                                }
                                                //                                                ?>
                                            </select>
                                        </div>
                                        <div class="sharedElement">
                                            <select>
                                                <option>equal</option>
                                                <option>no less than</option>
                                                <option>less than</option>
                                            </select>
                                            <input placeholder="Enter value..."/>
                                            <button type="button" class="searchBtn">Search</button>
                                        </div>
                                        <div class="advancedSelection">
                                            <select>
                                                <option>show</option>
                                                <?php //while ($row = $result_S->fetch_assoc()) {
                                                //                                                    echo "<option>" . $row{$show} . "</option>";
                                                //                                                }
                                                //                                                ?>
                                            </select>
                                            <select>
                                                <option>transport</option>
                                                <option>name</option>
                                                <?php //while ($row = $result_TN->fetch_assoc()) {
                                                //                                                    echo "<option>" . $row{$transportName} . "</option>";
                                                //                                                }
                                                //                                                ?>
                                            </select>
                                            <select>
                                                <option>transport</option>
                                                <option>parameter</option>
                                                <?php //while ($row = $result_TN->fetch_assoc()) {
                                                //                                                    echo "<option>" . $row{$transportParameter} . "</option>";
                                                //                                                }
                                                //                                                ?>
                                            </select>
                                        </div>
                                    </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
    <script src="js/home.js"></script>

    <!-- Process Chart Example-->
    <div class="card mb-3">
        <div class="card-header">
            <i class="fa fa-connectdevelop"></i> Process chart Example
        </div>
        <div class="card-body">
            <div id="myNetwork"></div>
            <script src="js/process.js"></script>
        </div>
        <div class="card-footer small text-muted">Updated yesterday at 11:59 PM</div>
    </div>
    <!-- Example DataTables Card-->
    <div class="card mb-3">
        <div class="card-header">
            <i class="fa fa-table"></i> Data Table Example
        </div>
        <div class="card-body">
            <div class="table-responsive">
                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Source</th>
                        <th>Destination</th>
                    </tr>
                    </thead>
                </table>
            </div>
        </div>
        <div class="card-footer small text-muted">Updated yesterday at 11:59 PM</div>
    </div>
</div>
<!-- This is the popup to edit new node-->
<div id="network-popUp">
    <span class="windowTitle" id="operation">node</span><br>
    <div id="select_Group">
        <div>
            <label class="addNodeOption">Type</label>
            <select id="node-group">
                <option value="storage" selected>storage</option>
                <option value="buffer">buffer</option>
                <option value="bigBagEmptying">big bag emptying</option>
                <option value="cheeseVat">cheese vat</option>
                <option value="culturePrep">culture prep</option>
                <option value="curdFiller">curd filler</option>
                <option value="dispatchCar" selected>dispatch car</option>
                <option value="powderSilos">powder silos</option>
                <option value="presses">presses</option>
                <option value="seedingCulture">seeding culture</option>
                <option value="transportCar">transport car</option>
                <option value="weighting">weighting</option>
                <option value="heatExchange">heat exchange</option>
                <option value="dvs">DVS</option>
                <option value="separator">separator</option>
                <option value="packing">packing</option>
                <option value="addIngredient">add ingredient</option>
                <option value="mix">pipe mix point</option>
            </select>
        </div>
        <div>
            <label class="addNodeOption">Name</label>
            <input id="node-label" value="new value"/>
        </div>
        <div>
            <label class="addNodeOption">ID</label>
            <input id="node-id"/>
        </div>
    </div>
    <input class="saveBtn" type="button" value="save" id="saveButton"/>
    <input class="cancelBtn" type="button" value="cancel" id="cancelButton"/>
<!-- /.container-fluid-->
<!-- /.content-wrapper-->
<footer class="sticky-footer">
    <div class="container">
        <div class="text-center">
            <small>Copyright © Your Website 2018</small>
        </div>
    </div>
</footer>
<!-- Scroll to Top Button-->
<a class="scroll-to-top rounded" href="#page-top">
    <i class="fa fa-angle-up"></i>
</a>
<!-- Logout Modal-->
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
     aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
                <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                </button>
            </div>
            <div class="modal-body">Select "Logout" below if you are ready to end your current session.</div>
            <div class="modal-footer">
                <button class="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                <a class="btn btn-primary" href="login.html">Logout</a>
            </div>
        </div>
    </div>
</div>


<!-- Bootstrap core JavaScript-->
<script src="vendor/jquery/jquery.min.js"></script>
<script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
<!-- Core plugin JavaScript-->
<script src="vendor/jquery-easing/jquery.easing.min.js"></script>
<!-- Page level plugin JavaScript-->
<script src="vendor/datatables/jquery.dataTables.js"></script>
<script src="vendor/datatables/dataTables.bootstrap4.js"></script>
<!-- Custom scripts for all pages-->
<script src="js/sb-admin.min.js"></script>
<!-- Custom scripts for this page-->
<script src="js/sb-admin-datatables.min.js"></script>
<script src="js/sb-admin-charts.min.js"></script>

</body>

</html>

