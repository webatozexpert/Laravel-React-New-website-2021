<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\CourseFeatureModel;
use App\Models\CoursePlanModel;
use App\Models\PaymentGuideModel;
use App\Models\MoreSeriesModel;
use App\Models\FreeClassModel;

class HomeController extends Controller
{

    function getCourseFeatures(Request $request){
       $result= CourseFeatureModel::all();
       return  $result;
    }

    function getCoursePlan(Request $request){
        $result= CoursePlanModel::all();
        return  $result;
    }

    function getPaymentGuide(Request $request){
        $result= PaymentGuideModel::all();
        return  $result;
    }

    function getMoreSeries(Request $request){
        $result= MoreSeriesModel::all();
        return  $result;
    }

    function getFreeClass(Request $request){
        $result= FreeClassModel::all();
        return  $result;
    }
}
