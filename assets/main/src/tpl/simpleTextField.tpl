<div class="stf_wapper">
	<textarea class="stf_textarea">{default_textarea_value}</textarea>
	<div class="stf_resource_wrapper">
		<ul class="stf_resources">
			<li class="stf_import_title">插入：</li>
			<li class="stf_import_face"><a href="javascript:void();">表情</a></li>
			<li class="stf_import_image"><a href="javascript:void();">图片</a></li>
			<li class="stf_import_video"><a href="javascript:void();">视频</a></li>
		</ul>
		<input class="stf_submit" type="submit" name="{default_submit_name}"/>
	</div>
	<div class="stf_popup_wrapper">
		<ul class="stf_popups">
			<li class="stf_popups_face">
				<div class="stf_popups_title">
					<a href="javascript:$('.stf_popup_wrapper').hide();" class="stf_popups_close">关闭</a>插入表情
				</div>
				<div class="stf_popups_content">
					{emotion_popups}
				</div>
			</li>
			<li class="stf_popups_image">
        		<div class='stf_popups_title'><a href="javascript:$('.stf_popup_wrapper').hide();" class="stf_popups_close">关闭</a>插入图片</div>
				<div class="stf_popups_content">
	        		<form id="stf_popups_image_form" action="{image_insert_action}" method="POST" enctype="multipart/form-data">
	        			<input type="hidden" name="user" value='{user_id}'>		
		        		<div class='line'> 
		        			<input type='radio' name='source' value='1' id='ti_img_source_1' checked/> <label for="ti_img_source_1">上传本地图片</label>
		        			<input type='radio' name='source' value='2' id='ti_img_source_2'/> <label for="ti_img_source_2">使用网络图片</label>
		        		</div>
		        		<div class='line' id="t_image_upload">
		        			本地图片：<input type='file' name='file' size='30'/>
		        		</div>
		        		<div class='line' id="t_image_network" style='display:none;'>
		        			网络图片: <input type='text' name='url' size='40' id='img_network_url'/>
		        		</div>
		                <div class="line tip">仅支持JPG、GIF、PNG图片文件，且文件小于200K</div>
		        		<div class='line submit'>
		        			<input type='submit' value='插入图片' id='BTN_TweetImageInsert' style='height:24px;line-height:24px;padding:0 3px;'/>
		        			<span id="ajax_processing" style='display:none;'>正在插入图片，请稍候...</span>
		        		</div>
	        		</form>
	        		<div id="stf_image_wrapper" style='display:none;'>
	        			<p>
	        				<span id="TweetImageFilename"></span>
	        				<a href="" id="DeleteTweetImage">删除</a>
	        			</p>
	        			<img id="stf_insert_obj" src="" style="display:block;margin:10px;border:1px solid #40AA53;"/>
	        		</div>
        		</div>
			</li>
			<li class="stf_popups_video">
        		<div class='stf_popups_title'>
        			<a href="javascript:$('.stf_popup_wrapper').hide();" class="stf_popups_close">关闭</a>插入视频
        		</div>
        		<div class="stf_popups_content">
	        		<form id="stf_popups_video_form" action="{video_insert_action}" method="POST">		
	        			<input type="hidden" name="user" value='{user_id}'>		
		        		<div class='line' id="t_video_upload">
								视频地址：<input type='text' name='url' size='30'/>
		        		</div>
		                <div class="line tip">现已支持 Youku、Tudou、Ku6、56 的视频播放页链接</div>
		        		<div class='line submit'>
		        			<input type='submit' value='插入视频' id='BTN_TweetVideoInsert' style='height:24px;line-height:24px;padding:0 3px;'/>
		        			<span id="ajax_processing" style='display:none;'>正在插入视频，请稍候...</span>
		        		</div>
	        		</form>
	        		<div id="TweetVideoObj" style='display:none;'>
	        			<p>
	        				<span id="tweet_video_type"></span>
	        				<a href="" id="DeleteTweetVideo">删除</a>
	        			</p>
	        			<embed id="TweetVideoSwf" type="application/x-shockwave-flash" width="380" height="300" quality="high">
	        		</div>
        		</div>
			</li>
		</ul>
	</div>
</div>