<?php

use Illuminate\Support\Facades\Route;



Route::get('/getCourseFeatures','HomeController@getCourseFeatures');
Route::get('/getCoursePlan','HomeController@getCoursePlan');
Route::get('/getPaymentGuide','HomeController@getPaymentGuide');
Route::get('/getMoreSeries','HomeController@getMoreSeries');
Route::get('/getFreeClass','HomeController@getFreeClass');


Route::get('/', function () {
    return view('index');
});
Route::get('{ReactRoutePath}', function () {
    return view('index');
})->where('ReactRoutePath','.*');
