<?php

class JqueryPluginController extends Foo_Controller_Abstract
{
	public function init()
	{
	}

	public function indexAction()
	{
	}

	public function firstTryAction()
	{
		$this->view->headScript()->appendFile('/js/jquery.maxheight-1.0.js', self::MIME_JS);
	}

	public function inplaceEditorAction()
	{
		$this->view->headScript()->appendFile('/js/jquery.fooInPlaceEdit.js', self::MIME_JS);
	}

	public function foolayerAction()
	{
		$this->view->headScript()->appendFile('/js/jquery.foolayer.js', self::MIME_JS);
	}
}
