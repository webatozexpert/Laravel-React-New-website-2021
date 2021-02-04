<?php

use App\Http\Controllers\HomeController;
use Illuminate\Support\Facades\Route;

Route::get('/CourseFeatures',[HomeController::class,'getCourseFeatures']);
Route::get('/CoursePlan',[HomeController::class,'getCoursePlan']);
Route::get('/PaymentGuide',[HomeController::class,'getPaymentGuide']);
Route::get('/MoreSeries',[HomeController::class,'getMoreSeries']);
Route::get('/FreeClass',[HomeController::class,'getFreeClass']);



Route::get('/', function () {
    return view('index');
});
Route::get('{ReactRoutePath}', function () {
    return view('index');
})->where('ReactRoutePath','.*');
