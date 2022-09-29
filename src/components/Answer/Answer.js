import React from 'react';
import './Answer.css'

const Answer = () => {
    return (
        <div className='answer-container'>
            <div className='answer'>
                <h1> react কি ভাবে কাজ করে ?</h1>
                <p>
                    React জাভাস্ক্রিপ্ট এর এর লাইবেরি । react components bais কাজ করে । react  JSX কোডকে বেবলের মাধ্যমে কম্পাইল করে । react তাঁদের ভারচুয়াল dom ক্রিয়েট করে এবং dom  এ কোন পরিবর্তন হলে সেটা ভারচুয়াল dom এর সাথে কমপিয়ার করে js ar dom এ আপডেট করে ।
                </p>
            </div>
            <div className='answer'>
                <h1>Props Vs State </h1>
                <p>
                    props এক component থেকে অন্ন component টে ডাটা পাঠাতে ব্যাবহার করা হয় । state হল ডাটা সংরক্ষণ করে রাখে যা শুধু সেই componants a ব্যাবহার করা যাই । অন্য কোন component এ ডাটা পাঠানো যাই না । usestate component এর ডাটা আপডেট করতে ব্যাবহার করা হয় ।  
                </p>
            </div>
            <div className='answer'>
                <h1>UseEffect api কল করা ছাড়া কি কাজে ব্যাবহার করা হয় ।</h1>
                <p>
                    ১। local storage ডাটা রিড করার জন্য । 
                    ২। ইভেন্ট লিসেনারকে রেজিসটেশন করে এবং বাতিল করতে ব্যাবহার করা হয়।
                    ৩/ কোন মান পরিবর্তন হলে সেটি আপডেট করতে ।
                    ৪। side effect ক্লিয়ার করতে ।
                    ৫।Dependencies argument পাস করা যাই । 
                </p>
            </div>
        </div>
    );
};

export default Answer;